# `cloudMigrationsMigrationPlan` Submodule <a name="`cloudMigrationsMigrationPlan` Submodule" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudMigrationsMigrationPlan <a name="CloudMigrationsMigrationPlan" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan oci_cloud_migrations_migration_plan}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan(scope: Construct, id: string, config: CloudMigrationsMigrationPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig">CloudMigrationsMigrationPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig">CloudMigrationsMigrationPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putStrategies">putStrategies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTargetEnvironments">putTargetEnvironments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetSourceMigrationPlanId">resetSourceMigrationPlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetStrategies">resetStrategies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetTargetEnvironments">resetTargetEnvironments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStrategies` <a name="putStrategies" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putStrategies"></a>

```typescript
public putStrategies(value: IResolvable | CloudMigrationsMigrationPlanStrategies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putStrategies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>[]

---

##### `putTargetEnvironments` <a name="putTargetEnvironments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTargetEnvironments"></a>

```typescript
public putTargetEnvironments(value: IResolvable | CloudMigrationsMigrationPlanTargetEnvironments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTargetEnvironments.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudMigrationsMigrationPlanTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSourceMigrationPlanId` <a name="resetSourceMigrationPlanId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetSourceMigrationPlanId"></a>

```typescript
public resetSourceMigrationPlanId(): void
```

##### `resetStrategies` <a name="resetStrategies" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetStrategies"></a>

```typescript
public resetStrategies(): void
```

##### `resetTargetEnvironments` <a name="resetTargetEnvironments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetTargetEnvironments"></a>

```typescript
public resetTargetEnvironments(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudMigrationsMigrationPlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isConstruct"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformElement"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformResource"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudMigrationsMigrationPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudMigrationsMigrationPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudMigrationsMigrationPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudMigrationsMigrationPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.calculatedLimits">calculatedLimits</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationPlanStats">migrationPlanStats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList">CloudMigrationsMigrationPlanMigrationPlanStatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.referenceToRmsStack">referenceToRmsStack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.strategies">strategies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList">CloudMigrationsMigrationPlanStrategiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.targetEnvironments">targetEnvironments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList">CloudMigrationsMigrationPlanTargetEnvironmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference">CloudMigrationsMigrationPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationIdInput">migrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.sourceMigrationPlanIdInput">sourceMigrationPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.strategiesInput">strategiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.targetEnvironmentsInput">targetEnvironmentsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationId">migrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.sourceMigrationPlanId">sourceMigrationPlanId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `calculatedLimits`<sup>Required</sup> <a name="calculatedLimits" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.calculatedLimits"></a>

```typescript
public readonly calculatedLimits: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `migrationPlanStats`<sup>Required</sup> <a name="migrationPlanStats" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationPlanStats"></a>

```typescript
public readonly migrationPlanStats: CloudMigrationsMigrationPlanMigrationPlanStatsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList">CloudMigrationsMigrationPlanMigrationPlanStatsList</a>

---

##### `referenceToRmsStack`<sup>Required</sup> <a name="referenceToRmsStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.referenceToRmsStack"></a>

```typescript
public readonly referenceToRmsStack: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `strategies`<sup>Required</sup> <a name="strategies" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.strategies"></a>

```typescript
public readonly strategies: CloudMigrationsMigrationPlanStrategiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList">CloudMigrationsMigrationPlanStrategiesList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetEnvironments`<sup>Required</sup> <a name="targetEnvironments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.targetEnvironments"></a>

```typescript
public readonly targetEnvironments: CloudMigrationsMigrationPlanTargetEnvironmentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList">CloudMigrationsMigrationPlanTargetEnvironmentsList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeouts"></a>

```typescript
public readonly timeouts: CloudMigrationsMigrationPlanTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference">CloudMigrationsMigrationPlanTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `migrationIdInput`<sup>Optional</sup> <a name="migrationIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationIdInput"></a>

```typescript
public readonly migrationIdInput: string;
```

- *Type:* string

---

##### `sourceMigrationPlanIdInput`<sup>Optional</sup> <a name="sourceMigrationPlanIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.sourceMigrationPlanIdInput"></a>

```typescript
public readonly sourceMigrationPlanIdInput: string;
```

- *Type:* string

---

##### `strategiesInput`<sup>Optional</sup> <a name="strategiesInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.strategiesInput"></a>

```typescript
public readonly strategiesInput: IResolvable | CloudMigrationsMigrationPlanStrategies[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>[]

---

##### `targetEnvironmentsInput`<sup>Optional</sup> <a name="targetEnvironmentsInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.targetEnvironmentsInput"></a>

```typescript
public readonly targetEnvironmentsInput: IResolvable | CloudMigrationsMigrationPlanTargetEnvironments[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudMigrationsMigrationPlanTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `migrationId`<sup>Required</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.migrationId"></a>

```typescript
public readonly migrationId: string;
```

- *Type:* string

---

##### `sourceMigrationPlanId`<sup>Required</sup> <a name="sourceMigrationPlanId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.sourceMigrationPlanId"></a>

```typescript
public readonly sourceMigrationPlanId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudMigrationsMigrationPlanConfig <a name="CloudMigrationsMigrationPlanConfig" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const cloudMigrationsMigrationPlanConfig: cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#compartment_id CloudMigrationsMigrationPlan#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#display_name CloudMigrationsMigrationPlan#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.migrationId">migrationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#migration_id CloudMigrationsMigrationPlan#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#defined_tags CloudMigrationsMigrationPlan#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#freeform_tags CloudMigrationsMigrationPlan#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#id CloudMigrationsMigrationPlan#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.sourceMigrationPlanId">sourceMigrationPlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#source_migration_plan_id CloudMigrationsMigrationPlan#source_migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.strategies">strategies</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>[]</code> | strategies block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.targetEnvironments">targetEnvironments</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>[]</code> | target_environments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#compartment_id CloudMigrationsMigrationPlan#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#display_name CloudMigrationsMigrationPlan#display_name}.

---

##### `migrationId`<sup>Required</sup> <a name="migrationId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.migrationId"></a>

```typescript
public readonly migrationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#migration_id CloudMigrationsMigrationPlan#migration_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#defined_tags CloudMigrationsMigrationPlan#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#freeform_tags CloudMigrationsMigrationPlan#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#id CloudMigrationsMigrationPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceMigrationPlanId`<sup>Optional</sup> <a name="sourceMigrationPlanId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.sourceMigrationPlanId"></a>

```typescript
public readonly sourceMigrationPlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#source_migration_plan_id CloudMigrationsMigrationPlan#source_migration_plan_id}.

---

##### `strategies`<sup>Optional</sup> <a name="strategies" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.strategies"></a>

```typescript
public readonly strategies: IResolvable | CloudMigrationsMigrationPlanStrategies[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>[]

strategies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#strategies CloudMigrationsMigrationPlan#strategies}

---

##### `targetEnvironments`<sup>Optional</sup> <a name="targetEnvironments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.targetEnvironments"></a>

```typescript
public readonly targetEnvironments: IResolvable | CloudMigrationsMigrationPlanTargetEnvironments[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>[]

target_environments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#target_environments CloudMigrationsMigrationPlan#target_environments}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudMigrationsMigrationPlanTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#timeouts CloudMigrationsMigrationPlan#timeouts}

---

### CloudMigrationsMigrationPlanMigrationPlanStats <a name="CloudMigrationsMigrationPlanMigrationPlanStats" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStats.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const cloudMigrationsMigrationPlanMigrationPlanStats: cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStats = { ... }
```


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const cloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost: cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost = { ... }
```


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const cloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute: cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute = { ... }
```


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const cloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage: cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage = { ... }
```


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const cloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage: cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage = { ... }
```


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const cloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes: cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes = { ... }
```


### CloudMigrationsMigrationPlanStrategies <a name="CloudMigrationsMigrationPlanStrategies" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const cloudMigrationsMigrationPlanStrategies: cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#resource_type CloudMigrationsMigrationPlan#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.strategyType">strategyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#strategy_type CloudMigrationsMigrationPlan#strategy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.adjustmentMultiplier">adjustmentMultiplier</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#adjustment_multiplier CloudMigrationsMigrationPlan#adjustment_multiplier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.metricTimeWindow">metricTimeWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#metric_time_window CloudMigrationsMigrationPlan#metric_time_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.metricType">metricType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#metric_type CloudMigrationsMigrationPlan#metric_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.percentile">percentile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#percentile CloudMigrationsMigrationPlan#percentile}. |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#resource_type CloudMigrationsMigrationPlan#resource_type}.

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.strategyType"></a>

```typescript
public readonly strategyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#strategy_type CloudMigrationsMigrationPlan#strategy_type}.

---

##### `adjustmentMultiplier`<sup>Optional</sup> <a name="adjustmentMultiplier" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.adjustmentMultiplier"></a>

```typescript
public readonly adjustmentMultiplier: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#adjustment_multiplier CloudMigrationsMigrationPlan#adjustment_multiplier}.

---

##### `metricTimeWindow`<sup>Optional</sup> <a name="metricTimeWindow" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.metricTimeWindow"></a>

```typescript
public readonly metricTimeWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#metric_time_window CloudMigrationsMigrationPlan#metric_time_window}.

---

##### `metricType`<sup>Optional</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.metricType"></a>

```typescript
public readonly metricType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#metric_type CloudMigrationsMigrationPlan#metric_type}.

---

##### `percentile`<sup>Optional</sup> <a name="percentile" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies.property.percentile"></a>

```typescript
public readonly percentile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#percentile CloudMigrationsMigrationPlan#percentile}.

---

### CloudMigrationsMigrationPlanTargetEnvironments <a name="CloudMigrationsMigrationPlanTargetEnvironments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const cloudMigrationsMigrationPlanTargetEnvironments: cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.subnet">subnet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#subnet CloudMigrationsMigrationPlan#subnet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.targetEnvironmentType">targetEnvironmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#target_environment_type CloudMigrationsMigrationPlan#target_environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.vcn">vcn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#vcn CloudMigrationsMigrationPlan#vcn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#availability_domain CloudMigrationsMigrationPlan#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.dedicatedVmHost">dedicatedVmHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#dedicated_vm_host CloudMigrationsMigrationPlan#dedicated_vm_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.faultDomain">faultDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#fault_domain CloudMigrationsMigrationPlan#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.msLicense">msLicense</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#ms_license CloudMigrationsMigrationPlan#ms_license}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.preferredShapeType">preferredShapeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#preferred_shape_type CloudMigrationsMigrationPlan#preferred_shape_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.targetCompartmentId">targetCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#target_compartment_id CloudMigrationsMigrationPlan#target_compartment_id}. |

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#subnet CloudMigrationsMigrationPlan#subnet}.

---

##### `targetEnvironmentType`<sup>Required</sup> <a name="targetEnvironmentType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.targetEnvironmentType"></a>

```typescript
public readonly targetEnvironmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#target_environment_type CloudMigrationsMigrationPlan#target_environment_type}.

---

##### `vcn`<sup>Required</sup> <a name="vcn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.vcn"></a>

```typescript
public readonly vcn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#vcn CloudMigrationsMigrationPlan#vcn}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#availability_domain CloudMigrationsMigrationPlan#availability_domain}.

---

##### `dedicatedVmHost`<sup>Optional</sup> <a name="dedicatedVmHost" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.dedicatedVmHost"></a>

```typescript
public readonly dedicatedVmHost: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#dedicated_vm_host CloudMigrationsMigrationPlan#dedicated_vm_host}.

---

##### `faultDomain`<sup>Optional</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#fault_domain CloudMigrationsMigrationPlan#fault_domain}.

---

##### `msLicense`<sup>Optional</sup> <a name="msLicense" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.msLicense"></a>

```typescript
public readonly msLicense: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#ms_license CloudMigrationsMigrationPlan#ms_license}.

---

##### `preferredShapeType`<sup>Optional</sup> <a name="preferredShapeType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.preferredShapeType"></a>

```typescript
public readonly preferredShapeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#preferred_shape_type CloudMigrationsMigrationPlan#preferred_shape_type}.

---

##### `targetCompartmentId`<sup>Optional</sup> <a name="targetCompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments.property.targetCompartmentId"></a>

```typescript
public readonly targetCompartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#target_compartment_id CloudMigrationsMigrationPlan#target_compartment_id}.

---

### CloudMigrationsMigrationPlanTimeouts <a name="CloudMigrationsMigrationPlanTimeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

const cloudMigrationsMigrationPlanTimeouts: cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#create CloudMigrationsMigrationPlan#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#delete CloudMigrationsMigrationPlan#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#update CloudMigrationsMigrationPlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#create CloudMigrationsMigrationPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#delete CloudMigrationsMigrationPlan#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_plan#update CloudMigrationsMigrationPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudMigrationsMigrationPlanMigrationPlanStatsList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.get"></a>

```typescript
public get(index: number): CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.totalEstimatedCost">totalEstimatedCost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.vmCount">vmCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStats">CloudMigrationsMigrationPlanMigrationPlanStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `totalEstimatedCost`<sup>Required</sup> <a name="totalEstimatedCost" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.totalEstimatedCost"></a>

```typescript
public readonly totalEstimatedCost: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList</a>

---

##### `vmCount`<sup>Required</sup> <a name="vmCount" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.vmCount"></a>

```typescript
public readonly vmCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudMigrationsMigrationPlanMigrationPlanStats;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStats">CloudMigrationsMigrationPlanMigrationPlanStats</a>

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.get"></a>

```typescript
public get(index: number): CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount">gpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour">gpuPerHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription">gpuPerHourBySubscription</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb">memoryAmountGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour">memoryGbPerHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription">memoryGbPerHourBySubscription</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount">ocpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour">ocpuPerHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription">ocpuPerHourBySubscription</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour">totalPerHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription">totalPerHourBySubscription</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gpuCount`<sup>Required</sup> <a name="gpuCount" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuCount"></a>

```typescript
public readonly gpuCount: number;
```

- *Type:* number

---

##### `gpuPerHour`<sup>Required</sup> <a name="gpuPerHour" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHour"></a>

```typescript
public readonly gpuPerHour: number;
```

- *Type:* number

---

##### `gpuPerHourBySubscription`<sup>Required</sup> <a name="gpuPerHourBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.gpuPerHourBySubscription"></a>

```typescript
public readonly gpuPerHourBySubscription: number;
```

- *Type:* number

---

##### `memoryAmountGb`<sup>Required</sup> <a name="memoryAmountGb" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryAmountGb"></a>

```typescript
public readonly memoryAmountGb: number;
```

- *Type:* number

---

##### `memoryGbPerHour`<sup>Required</sup> <a name="memoryGbPerHour" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHour"></a>

```typescript
public readonly memoryGbPerHour: number;
```

- *Type:* number

---

##### `memoryGbPerHourBySubscription`<sup>Required</sup> <a name="memoryGbPerHourBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.memoryGbPerHourBySubscription"></a>

```typescript
public readonly memoryGbPerHourBySubscription: number;
```

- *Type:* number

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuCount"></a>

```typescript
public readonly ocpuCount: number;
```

- *Type:* number

---

##### `ocpuPerHour`<sup>Required</sup> <a name="ocpuPerHour" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHour"></a>

```typescript
public readonly ocpuPerHour: number;
```

- *Type:* number

---

##### `ocpuPerHourBySubscription`<sup>Required</sup> <a name="ocpuPerHourBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.ocpuPerHourBySubscription"></a>

```typescript
public readonly ocpuPerHourBySubscription: number;
```

- *Type:* number

---

##### `totalPerHour`<sup>Required</sup> <a name="totalPerHour" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHour"></a>

```typescript
public readonly totalPerHour: number;
```

- *Type:* number

---

##### `totalPerHourBySubscription`<sup>Required</sup> <a name="totalPerHourBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.totalPerHourBySubscription"></a>

```typescript
public readonly totalPerHourBySubscription: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostCompute</a>

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.get"></a>

```typescript
public get(index: number): CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.get"></a>

```typescript
public get(index: number): CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour">totalPerHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription">totalPerHourBySubscription</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `totalPerHour`<sup>Required</sup> <a name="totalPerHour" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHour"></a>

```typescript
public readonly totalPerHour: number;
```

- *Type:* number

---

##### `totalPerHourBySubscription`<sup>Required</sup> <a name="totalPerHourBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.totalPerHourBySubscription"></a>

```typescript
public readonly totalPerHourBySubscription: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImage</a>

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage">osImage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage">storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth">totalEstimationPerMonth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription">totalEstimationPerMonthBySubscription</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compute`<sup>Required</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.compute"></a>

```typescript
public readonly compute: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostComputeList</a>

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `osImage`<sup>Required</sup> <a name="osImage" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.osImage"></a>

```typescript
public readonly osImage: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOsImageList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.storage"></a>

```typescript
public readonly storage: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList</a>

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `totalEstimationPerMonth`<sup>Required</sup> <a name="totalEstimationPerMonth" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonth"></a>

```typescript
public readonly totalEstimationPerMonth: number;
```

- *Type:* number

---

##### `totalEstimationPerMonthBySubscription`<sup>Required</sup> <a name="totalEstimationPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.totalEstimationPerMonthBySubscription"></a>

```typescript
public readonly totalEstimationPerMonthBySubscription: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCost</a>

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.get"></a>

```typescript
public get(index: number): CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth">totalGbPerMonth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription">totalGbPerMonthBySubscription</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes">volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `totalGbPerMonth`<sup>Required</sup> <a name="totalGbPerMonth" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonth"></a>

```typescript
public readonly totalGbPerMonth: number;
```

- *Type:* number

---

##### `totalGbPerMonthBySubscription`<sup>Required</sup> <a name="totalGbPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.totalGbPerMonthBySubscription"></a>

```typescript
public readonly totalGbPerMonthBySubscription: number;
```

- *Type:* number

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.volumes"></a>

```typescript
public readonly volumes: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorage</a>

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get"></a>

```typescript
public get(index: number): CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference <a name="CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb">capacityGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth">totalGbPerMonth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription">totalGbPerMonthBySubscription</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityGb`<sup>Required</sup> <a name="capacityGb" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.capacityGb"></a>

```typescript
public readonly capacityGb: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `totalGbPerMonth`<sup>Required</sup> <a name="totalGbPerMonth" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonth"></a>

```typescript
public readonly totalGbPerMonth: number;
```

- *Type:* number

---

##### `totalGbPerMonthBySubscription`<sup>Required</sup> <a name="totalGbPerMonthBySubscription" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.totalGbPerMonthBySubscription"></a>

```typescript
public readonly totalGbPerMonthBySubscription: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes">CloudMigrationsMigrationPlanMigrationPlanStatsTotalEstimatedCostStorageVolumes</a>

---


### CloudMigrationsMigrationPlanStrategiesList <a name="CloudMigrationsMigrationPlanStrategiesList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.get"></a>

```typescript
public get(index: number): CloudMigrationsMigrationPlanStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudMigrationsMigrationPlanStrategies[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>[]

---


### CloudMigrationsMigrationPlanStrategiesOutputReference <a name="CloudMigrationsMigrationPlanStrategiesOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetAdjustmentMultiplier">resetAdjustmentMultiplier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetMetricTimeWindow">resetMetricTimeWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetMetricType">resetMetricType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetPercentile">resetPercentile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdjustmentMultiplier` <a name="resetAdjustmentMultiplier" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetAdjustmentMultiplier"></a>

```typescript
public resetAdjustmentMultiplier(): void
```

##### `resetMetricTimeWindow` <a name="resetMetricTimeWindow" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetMetricTimeWindow"></a>

```typescript
public resetMetricTimeWindow(): void
```

##### `resetMetricType` <a name="resetMetricType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetMetricType"></a>

```typescript
public resetMetricType(): void
```

##### `resetPercentile` <a name="resetPercentile" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.resetPercentile"></a>

```typescript
public resetPercentile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.adjustmentMultiplierInput">adjustmentMultiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTimeWindowInput">metricTimeWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTypeInput">metricTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.percentileInput">percentileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.strategyTypeInput">strategyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.adjustmentMultiplier">adjustmentMultiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTimeWindow">metricTimeWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricType">metricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.percentile">percentile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.strategyType">strategyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adjustmentMultiplierInput`<sup>Optional</sup> <a name="adjustmentMultiplierInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.adjustmentMultiplierInput"></a>

```typescript
public readonly adjustmentMultiplierInput: number;
```

- *Type:* number

---

##### `metricTimeWindowInput`<sup>Optional</sup> <a name="metricTimeWindowInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTimeWindowInput"></a>

```typescript
public readonly metricTimeWindowInput: string;
```

- *Type:* string

---

##### `metricTypeInput`<sup>Optional</sup> <a name="metricTypeInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTypeInput"></a>

```typescript
public readonly metricTypeInput: string;
```

- *Type:* string

---

##### `percentileInput`<sup>Optional</sup> <a name="percentileInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.percentileInput"></a>

```typescript
public readonly percentileInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `strategyTypeInput`<sup>Optional</sup> <a name="strategyTypeInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.strategyTypeInput"></a>

```typescript
public readonly strategyTypeInput: string;
```

- *Type:* string

---

##### `adjustmentMultiplier`<sup>Required</sup> <a name="adjustmentMultiplier" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.adjustmentMultiplier"></a>

```typescript
public readonly adjustmentMultiplier: number;
```

- *Type:* number

---

##### `metricTimeWindow`<sup>Required</sup> <a name="metricTimeWindow" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricTimeWindow"></a>

```typescript
public readonly metricTimeWindow: string;
```

- *Type:* string

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.metricType"></a>

```typescript
public readonly metricType: string;
```

- *Type:* string

---

##### `percentile`<sup>Required</sup> <a name="percentile" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.percentile"></a>

```typescript
public readonly percentile: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.strategyType"></a>

```typescript
public readonly strategyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudMigrationsMigrationPlanStrategies;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanStrategies">CloudMigrationsMigrationPlanStrategies</a>

---


### CloudMigrationsMigrationPlanTargetEnvironmentsList <a name="CloudMigrationsMigrationPlanTargetEnvironmentsList" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.get"></a>

```typescript
public get(index: number): CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudMigrationsMigrationPlanTargetEnvironments[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>[]

---


### CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference <a name="CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetDedicatedVmHost">resetDedicatedVmHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetFaultDomain">resetFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetMsLicense">resetMsLicense</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetPreferredShapeType">resetPreferredShapeType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetTargetCompartmentId">resetTargetCompartmentId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetDedicatedVmHost` <a name="resetDedicatedVmHost" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetDedicatedVmHost"></a>

```typescript
public resetDedicatedVmHost(): void
```

##### `resetFaultDomain` <a name="resetFaultDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetFaultDomain"></a>

```typescript
public resetFaultDomain(): void
```

##### `resetMsLicense` <a name="resetMsLicense" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetMsLicense"></a>

```typescript
public resetMsLicense(): void
```

##### `resetPreferredShapeType` <a name="resetPreferredShapeType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetPreferredShapeType"></a>

```typescript
public resetPreferredShapeType(): void
```

##### `resetTargetCompartmentId` <a name="resetTargetCompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.resetTargetCompartmentId"></a>

```typescript
public resetTargetCompartmentId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.dedicatedVmHostInput">dedicatedVmHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.faultDomainInput">faultDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.msLicenseInput">msLicenseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.preferredShapeTypeInput">preferredShapeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.subnetInput">subnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetCompartmentIdInput">targetCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetEnvironmentTypeInput">targetEnvironmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.vcnInput">vcnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.dedicatedVmHost">dedicatedVmHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.msLicense">msLicense</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.preferredShapeType">preferredShapeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetCompartmentId">targetCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetEnvironmentType">targetEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.vcn">vcn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `dedicatedVmHostInput`<sup>Optional</sup> <a name="dedicatedVmHostInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.dedicatedVmHostInput"></a>

```typescript
public readonly dedicatedVmHostInput: string;
```

- *Type:* string

---

##### `faultDomainInput`<sup>Optional</sup> <a name="faultDomainInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.faultDomainInput"></a>

```typescript
public readonly faultDomainInput: string;
```

- *Type:* string

---

##### `msLicenseInput`<sup>Optional</sup> <a name="msLicenseInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.msLicenseInput"></a>

```typescript
public readonly msLicenseInput: string;
```

- *Type:* string

---

##### `preferredShapeTypeInput`<sup>Optional</sup> <a name="preferredShapeTypeInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.preferredShapeTypeInput"></a>

```typescript
public readonly preferredShapeTypeInput: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.subnetInput"></a>

```typescript
public readonly subnetInput: string;
```

- *Type:* string

---

##### `targetCompartmentIdInput`<sup>Optional</sup> <a name="targetCompartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetCompartmentIdInput"></a>

```typescript
public readonly targetCompartmentIdInput: string;
```

- *Type:* string

---

##### `targetEnvironmentTypeInput`<sup>Optional</sup> <a name="targetEnvironmentTypeInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetEnvironmentTypeInput"></a>

```typescript
public readonly targetEnvironmentTypeInput: string;
```

- *Type:* string

---

##### `vcnInput`<sup>Optional</sup> <a name="vcnInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.vcnInput"></a>

```typescript
public readonly vcnInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `dedicatedVmHost`<sup>Required</sup> <a name="dedicatedVmHost" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.dedicatedVmHost"></a>

```typescript
public readonly dedicatedVmHost: string;
```

- *Type:* string

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `msLicense`<sup>Required</sup> <a name="msLicense" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.msLicense"></a>

```typescript
public readonly msLicense: string;
```

- *Type:* string

---

##### `preferredShapeType`<sup>Required</sup> <a name="preferredShapeType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.preferredShapeType"></a>

```typescript
public readonly preferredShapeType: string;
```

- *Type:* string

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

##### `targetCompartmentId`<sup>Required</sup> <a name="targetCompartmentId" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetCompartmentId"></a>

```typescript
public readonly targetCompartmentId: string;
```

- *Type:* string

---

##### `targetEnvironmentType`<sup>Required</sup> <a name="targetEnvironmentType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.targetEnvironmentType"></a>

```typescript
public readonly targetEnvironmentType: string;
```

- *Type:* string

---

##### `vcn`<sup>Required</sup> <a name="vcn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.vcn"></a>

```typescript
public readonly vcn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudMigrationsMigrationPlanTargetEnvironments;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTargetEnvironments">CloudMigrationsMigrationPlanTargetEnvironments</a>

---


### CloudMigrationsMigrationPlanTimeoutsOutputReference <a name="CloudMigrationsMigrationPlanTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudMigrationsMigrationPlan } from 'rhizo-co-terraform-provider-oci'

new cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudMigrationsMigrationPlanTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationPlan.CloudMigrationsMigrationPlanTimeouts">CloudMigrationsMigrationPlanTimeouts</a>

---



