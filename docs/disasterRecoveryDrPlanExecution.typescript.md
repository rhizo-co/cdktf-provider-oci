# `disasterRecoveryDrPlanExecution` Submodule <a name="`disasterRecoveryDrPlanExecution` Submodule" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisasterRecoveryDrPlanExecution <a name="DisasterRecoveryDrPlanExecution" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution oci_disaster_recovery_dr_plan_execution}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution(scope: Construct, id: string, config: DisasterRecoveryDrPlanExecutionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig">DisasterRecoveryDrPlanExecutionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig">DisasterRecoveryDrPlanExecutionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putExecutionOptions">putExecutionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExecutionOptions` <a name="putExecutionOptions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putExecutionOptions"></a>

```typescript
public putExecutionOptions(value: DisasterRecoveryDrPlanExecutionExecutionOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putExecutionOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putTimeouts"></a>

```typescript
public putTimeouts(value: DisasterRecoveryDrPlanExecutionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts">DisasterRecoveryDrPlanExecutionTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DisasterRecoveryDrPlanExecution resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isConstruct"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformElement"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformResource"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DisasterRecoveryDrPlanExecution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DisasterRecoveryDrPlanExecution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DisasterRecoveryDrPlanExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DisasterRecoveryDrPlanExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.drProtectionGroupId">drProtectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionDurationInSec">executionDurationInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionOptions">executionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference">DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.groupExecutions">groupExecutions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList">DisasterRecoveryDrPlanExecutionGroupExecutionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.lifeCycleDetails">lifeCycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.logLocation">logLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList">DisasterRecoveryDrPlanExecutionLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.peerDrProtectionGroupId">peerDrProtectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.peerRegion">peerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planExecutionType">planExecutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference">DisasterRecoveryDrPlanExecutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionOptionsInput">executionOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planIdInput">planIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts">DisasterRecoveryDrPlanExecutionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planId">planId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `drProtectionGroupId`<sup>Required</sup> <a name="drProtectionGroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.drProtectionGroupId"></a>

```typescript
public readonly drProtectionGroupId: string;
```

- *Type:* string

---

##### `executionDurationInSec`<sup>Required</sup> <a name="executionDurationInSec" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionDurationInSec"></a>

```typescript
public readonly executionDurationInSec: number;
```

- *Type:* number

---

##### `executionOptions`<sup>Required</sup> <a name="executionOptions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionOptions"></a>

```typescript
public readonly executionOptions: DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference">DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference</a>

---

##### `groupExecutions`<sup>Required</sup> <a name="groupExecutions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.groupExecutions"></a>

```typescript
public readonly groupExecutions: DisasterRecoveryDrPlanExecutionGroupExecutionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList">DisasterRecoveryDrPlanExecutionGroupExecutionsList</a>

---

##### `lifeCycleDetails`<sup>Required</sup> <a name="lifeCycleDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.lifeCycleDetails"></a>

```typescript
public readonly lifeCycleDetails: string;
```

- *Type:* string

---

##### `logLocation`<sup>Required</sup> <a name="logLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.logLocation"></a>

```typescript
public readonly logLocation: DisasterRecoveryDrPlanExecutionLogLocationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList">DisasterRecoveryDrPlanExecutionLogLocationList</a>

---

##### `peerDrProtectionGroupId`<sup>Required</sup> <a name="peerDrProtectionGroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.peerDrProtectionGroupId"></a>

```typescript
public readonly peerDrProtectionGroupId: string;
```

- *Type:* string

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

---

##### `planExecutionType`<sup>Required</sup> <a name="planExecutionType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planExecutionType"></a>

```typescript
public readonly planExecutionType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeouts"></a>

```typescript
public readonly timeouts: DisasterRecoveryDrPlanExecutionTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference">DisasterRecoveryDrPlanExecutionTimeoutsOutputReference</a>

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `executionOptionsInput`<sup>Optional</sup> <a name="executionOptionsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.executionOptionsInput"></a>

```typescript
public readonly executionOptionsInput: DisasterRecoveryDrPlanExecutionExecutionOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `planIdInput`<sup>Optional</sup> <a name="planIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planIdInput"></a>

```typescript
public readonly planIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DisasterRecoveryDrPlanExecutionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts">DisasterRecoveryDrPlanExecutionTimeouts</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `planId`<sup>Required</sup> <a name="planId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.planId"></a>

```typescript
public readonly planId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecution.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DisasterRecoveryDrPlanExecutionConfig <a name="DisasterRecoveryDrPlanExecutionConfig" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrPlanExecutionConfig: disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.executionOptions">executionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a></code> | execution_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.planId">planId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#plan_id DisasterRecoveryDrPlanExecution#plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#defined_tags DisasterRecoveryDrPlanExecution#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#display_name DisasterRecoveryDrPlanExecution#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#freeform_tags DisasterRecoveryDrPlanExecution#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#id DisasterRecoveryDrPlanExecution#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts">DisasterRecoveryDrPlanExecutionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `executionOptions`<sup>Required</sup> <a name="executionOptions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.executionOptions"></a>

```typescript
public readonly executionOptions: DisasterRecoveryDrPlanExecutionExecutionOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a>

execution_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#execution_options DisasterRecoveryDrPlanExecution#execution_options}

---

##### `planId`<sup>Required</sup> <a name="planId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.planId"></a>

```typescript
public readonly planId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#plan_id DisasterRecoveryDrPlanExecution#plan_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#defined_tags DisasterRecoveryDrPlanExecution#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#display_name DisasterRecoveryDrPlanExecution#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#freeform_tags DisasterRecoveryDrPlanExecution#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#id DisasterRecoveryDrPlanExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DisasterRecoveryDrPlanExecutionTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts">DisasterRecoveryDrPlanExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#timeouts DisasterRecoveryDrPlanExecution#timeouts}

---

### DisasterRecoveryDrPlanExecutionExecutionOptions <a name="DisasterRecoveryDrPlanExecutionExecutionOptions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrPlanExecutionExecutionOptions: disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.planExecutionType">planExecutionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#plan_execution_type DisasterRecoveryDrPlanExecution#plan_execution_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.arePrechecksEnabled">arePrechecksEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#are_prechecks_enabled DisasterRecoveryDrPlanExecution#are_prechecks_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.areWarningsIgnored">areWarningsIgnored</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#are_warnings_ignored DisasterRecoveryDrPlanExecution#are_warnings_ignored}. |

---

##### `planExecutionType`<sup>Required</sup> <a name="planExecutionType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.planExecutionType"></a>

```typescript
public readonly planExecutionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#plan_execution_type DisasterRecoveryDrPlanExecution#plan_execution_type}.

---

##### `arePrechecksEnabled`<sup>Optional</sup> <a name="arePrechecksEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.arePrechecksEnabled"></a>

```typescript
public readonly arePrechecksEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#are_prechecks_enabled DisasterRecoveryDrPlanExecution#are_prechecks_enabled}.

---

##### `areWarningsIgnored`<sup>Optional</sup> <a name="areWarningsIgnored" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions.property.areWarningsIgnored"></a>

```typescript
public readonly areWarningsIgnored: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#are_warnings_ignored DisasterRecoveryDrPlanExecution#are_warnings_ignored}.

---

### DisasterRecoveryDrPlanExecutionGroupExecutions <a name="DisasterRecoveryDrPlanExecutionGroupExecutions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutions.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrPlanExecutionGroupExecutions: disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutions = { ... }
```


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions: disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions = { ... }
```


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation: disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation = { ... }
```


### DisasterRecoveryDrPlanExecutionLogLocation <a name="DisasterRecoveryDrPlanExecutionLogLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocation.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrPlanExecutionLogLocation: disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocation = { ... }
```


### DisasterRecoveryDrPlanExecutionTimeouts <a name="DisasterRecoveryDrPlanExecutionTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

const disasterRecoveryDrPlanExecutionTimeouts: disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#create DisasterRecoveryDrPlanExecution#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#delete DisasterRecoveryDrPlanExecution#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#update DisasterRecoveryDrPlanExecution#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#create DisasterRecoveryDrPlanExecution#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#delete DisasterRecoveryDrPlanExecution#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan_execution#update DisasterRecoveryDrPlanExecution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference <a name="DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resetArePrechecksEnabled">resetArePrechecksEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resetAreWarningsIgnored">resetAreWarningsIgnored</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArePrechecksEnabled` <a name="resetArePrechecksEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resetArePrechecksEnabled"></a>

```typescript
public resetArePrechecksEnabled(): void
```

##### `resetAreWarningsIgnored` <a name="resetAreWarningsIgnored" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.resetAreWarningsIgnored"></a>

```typescript
public resetAreWarningsIgnored(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.arePrechecksEnabledInput">arePrechecksEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.areWarningsIgnoredInput">areWarningsIgnoredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.planExecutionTypeInput">planExecutionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.arePrechecksEnabled">arePrechecksEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.areWarningsIgnored">areWarningsIgnored</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.planExecutionType">planExecutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arePrechecksEnabledInput`<sup>Optional</sup> <a name="arePrechecksEnabledInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.arePrechecksEnabledInput"></a>

```typescript
public readonly arePrechecksEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `areWarningsIgnoredInput`<sup>Optional</sup> <a name="areWarningsIgnoredInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.areWarningsIgnoredInput"></a>

```typescript
public readonly areWarningsIgnoredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `planExecutionTypeInput`<sup>Optional</sup> <a name="planExecutionTypeInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.planExecutionTypeInput"></a>

```typescript
public readonly planExecutionTypeInput: string;
```

- *Type:* string

---

##### `arePrechecksEnabled`<sup>Required</sup> <a name="arePrechecksEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.arePrechecksEnabled"></a>

```typescript
public readonly arePrechecksEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `areWarningsIgnored`<sup>Required</sup> <a name="areWarningsIgnored" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.areWarningsIgnored"></a>

```typescript
public readonly areWarningsIgnored: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `planExecutionType`<sup>Required</sup> <a name="planExecutionType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.planExecutionType"></a>

```typescript
public readonly planExecutionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DisasterRecoveryDrPlanExecutionExecutionOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionExecutionOptions">DisasterRecoveryDrPlanExecutionExecutionOptions</a>

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsList <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.get"></a>

```typescript
public get(index: number): DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.executionDurationInSec">executionDurationInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.statusDetails">statusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.stepExecutions">stepExecutions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutions">DisasterRecoveryDrPlanExecutionGroupExecutions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `executionDurationInSec`<sup>Required</sup> <a name="executionDurationInSec" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.executionDurationInSec"></a>

```typescript
public readonly executionDurationInSec: number;
```

- *Type:* number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusDetails`<sup>Required</sup> <a name="statusDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.statusDetails"></a>

```typescript
public readonly statusDetails: string;
```

- *Type:* string

---

##### `stepExecutions`<sup>Required</sup> <a name="stepExecutions" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.stepExecutions"></a>

```typescript
public readonly stepExecutions: DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList</a>

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DisasterRecoveryDrPlanExecutionGroupExecutions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutions">DisasterRecoveryDrPlanExecutionGroupExecutions</a>

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.get"></a>

```typescript
public get(index: number): DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.get"></a>

```typescript
public get(index: number): DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation</a>

---


### DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference <a name="DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.executionDurationInSec">executionDurationInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.logLocation">logLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.statusDetails">statusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.stepId">stepId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `executionDurationInSec`<sup>Required</sup> <a name="executionDurationInSec" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.executionDurationInSec"></a>

```typescript
public readonly executionDurationInSec: number;
```

- *Type:* number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `logLocation`<sup>Required</sup> <a name="logLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.logLocation"></a>

```typescript
public readonly logLocation: DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusDetails`<sup>Required</sup> <a name="statusDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.statusDetails"></a>

```typescript
public readonly statusDetails: string;
```

- *Type:* string

---

##### `stepId`<sup>Required</sup> <a name="stepId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.stepId"></a>

```typescript
public readonly stepId: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions">DisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions</a>

---


### DisasterRecoveryDrPlanExecutionLogLocationList <a name="DisasterRecoveryDrPlanExecutionLogLocationList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.get"></a>

```typescript
public get(index: number): DisasterRecoveryDrPlanExecutionLogLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DisasterRecoveryDrPlanExecutionLogLocationOutputReference <a name="DisasterRecoveryDrPlanExecutionLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocation">DisasterRecoveryDrPlanExecutionLogLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DisasterRecoveryDrPlanExecutionLogLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionLogLocation">DisasterRecoveryDrPlanExecutionLogLocation</a>

---


### DisasterRecoveryDrPlanExecutionTimeoutsOutputReference <a name="DisasterRecoveryDrPlanExecutionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.Initializer"></a>

```typescript
import { disasterRecoveryDrPlanExecution } from 'rhizo-co-terraform-provider-oci'

new disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts">DisasterRecoveryDrPlanExecutionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DisasterRecoveryDrPlanExecutionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlanExecution.DisasterRecoveryDrPlanExecutionTimeouts">DisasterRecoveryDrPlanExecutionTimeouts</a>

---



